import { useSelector } from '../../../../store';
import { RegisterRoomState } from '../../../../types/reduxState';
import RegisterRoomBedTypes from '../RegisterRoomBedTypes';

const RegisterRoomBedList = () => {
  const bedList = useSelector(state => state.registerRoom.bedList);

  return (
    <ul className="register-room-bed-type-list">
      {bedList.map(bedroom => (
        <RegisterRoomBedTypes key={bedroom.id} bedroom={bedroom} />
      ))}
      {/* <RegisterRoomPublicBedTypes/> */}
    </ul>
  );
};

export default RegisterRoomBedList;
