import { useSession } from "next-auth/react";
import { Button } from "./Button";

type FollowButtonProps = {
  isFollowing: boolean;
  isLoading: boolean;
  userId: string;
  onClick: () => void;
};

export function FollowButton({
  isFollowing,
  isLoading,
  userId,
  onClick,
}: FollowButtonProps) {
  const session = useSession();

  //   if (session.status !== "authenticated" || session.data.user.id === userId) {
  if (session.status !== "authenticated") {
    return null;
  }

  return (
    <Button disabled={isLoading} onClick={onClick} small gray={isFollowing}>
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
}
