interface Props {
  setProfileDropdownState: (value: boolean) => void;
}

export default function ProfileImage({ setProfileDropdownState }: Props) {
  return (
    <img
      onClick={() => {
        setProfileDropdownState(true);
      }}
      className="w-12 ml-32 cursor-pointer"
      src={"profile.svg"}
      alt="profile-picture"
    />
  );
}
