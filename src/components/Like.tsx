import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
interface LikeProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikeProps) => {
  const [liked, setLiked] = React.useState(false);
  const toggleLiked = () => {
    setLiked(!liked);
    onClick();
  };

  return (
    <div>
      {liked ? (
        <AiFillHeart color="red" size={50} onClick={toggleLiked} />
      ) : (
        <AiOutlineHeart color="red" size={30} onClick={toggleLiked} />
      )}
    </div>
  );
};

export default Like;
