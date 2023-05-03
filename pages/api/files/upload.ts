import formidable from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';
import aws from 'aws-sdk';
import { createReadStream } from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const form = new formidable.IncomingForm();

      const url = await new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
          const s3 = new aws.S3({
            accessKeyId: process.env.ACCESSKEY_ID,
            secretAccessKey: process.env.SECRET_ACCESSKEY_ID,
          });

          const stream = createReadStream(files.file.filepath);

          await s3
            .upload({
              Bucket: process.env.S3_BUCKET_NAME!,
              Key: files.file.originalFilename,
              ACL: 'public-read',
              Body: stream,
            })
            .promise()
            .then(res => {
              console.log(res);
              resolve(res.Location);
            })
            .catch(e => reject(e));
        });
      });

      res.statusCode = 201;
      res.send(url);
    } catch (e) {
      console.error(e);
      res.end();
    }
  }

  res.statusCode = 405;
  return res.end();
};
