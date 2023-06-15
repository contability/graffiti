import {
  ServiceAccount,
  apps,
  credential,
  initializeApp,
} from "firebase-admin";

interface NotificationData {
  data: {
    title: string;
    body: string;
    icon: string;
    click_action: string;
  };
}

const sendFCMNotification = async (data: NotificationData) => {
  const serviceAccount: ServiceAccount = {
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
  };

  if (!apps.length) {
    initializeApp({
      credential: credential.cert(serviceAccount),
    });
  }

  let tokenList: Array<string> = [];
};
