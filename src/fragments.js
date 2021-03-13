export const COMMENT_FRAGMENT = `
fragment CommentParts on Comment{
  id
  text
  user{
    name
  }
}
`;

export const ROOM_FRAGMENT = `
    fragment RoomParts on Room {
        id
        participants {
            id
        }
    }
`;
