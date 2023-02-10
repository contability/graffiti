import { RootState, useSelector } from '../../../store';
import LoginModal from '../LoginModal';
import SignUpModal from '../SignUpModal';

interface IProps {
  closeModal: () => void;
}

const AuthModal: React.FC<IProps> = ({ closeModal }) => {
  const authMode = useSelector((state: RootState) => state.auth.authMode);

  return (
    <div style={{ zIndex: '12' }}>
      {authMode === 'signUp' && <SignUpModal closeModal={closeModal} />}
      {authMode === 'login' && (
        <div>
          <LoginModal closeModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default AuthModal;
