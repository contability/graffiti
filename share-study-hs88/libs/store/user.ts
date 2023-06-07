import { StateCreator, create } from 'zustand';
import { PersistOptions, createJSONStorage, persist } from 'zustand/middleware';

export interface IUser {
  userId: string;
  userName: string;
  userType: 'USER' | 'ADMIN' | 'NONE';
}

interface IUserStore extends IUser {
  update: (userInfo: IUser) => void;
}

// persist 적용시 타입 에러가 발생하는데 이렇게 하면 해결 되긴 한다.
// https://github.com/pmndrs/zustand/issues/650
type MyPersist = (
  config: StateCreator<IUserStore>,
  options: PersistOptions<IUserStore>,
) => StateCreator<IUserStore>;

const useUserStore = create<IUserStore>(
  (persist as MyPersist)(
    (set) => ({
      userId: '',
      userName: '',
      userType: 'NONE',
      update: (userInfo) =>
        set((state) => ({
          ...state,
          userId: userInfo.userId,
          userName: userInfo.userName,
          userType: userInfo.userType,
        })),
    }),
    {
      // localstorage의 key값이 될 이름
      name: 'userInfo',
      storage: createJSONStorage(() => sessionStorage), // (optional) 이거 옵션 안주면 localStorage가 default.
    },
  ),
);

export { useUserStore };
