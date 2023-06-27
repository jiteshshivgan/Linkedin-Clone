import styled from "styled-components";
import { useState } from "react";

function PostModal(props) {
  const [editorText, setEditorText] = useState("");

  const reset = (e) => {
    setEditorText("");
    props.handleClick(e);
  };

  return (
    <>
    { props.showModal==="open" &&
    <Container>
      <Content>
        <Header>
          <h2>Create a post</h2>
          <button onClick={(event)=>reset(event)}>
            <img src="/images/cross-icon.png"></img>
          </button>
        </Header>
        <SharedContent>
          <UserInfo>
            <img src="/images/user.svg" />
            <span>Name</span>
          </UserInfo>
          <Editor>
            <textarea
              value={editorText}
              onChange={(e) => setEditorText(e.target.value)}
              placeholder="What do you want to talk about?"
              autoFocus={true}
            ></textarea>
          </Editor>
        </SharedContent>
        <ShareCreation>
          <AttachAssets>
            <AssetButton>
              <img src="/images/share-image.png" />
            </AssetButton>
            <AssetButton>
              <img src="/images/share-video.png" />
            </AssetButton>
            <AssetButton>
              <img src="/images/share-calender.png" />
            </AssetButton>
            <AssetButton>
              <img src="/images/ellipsis.png" />
            </AssetButton>
          </AttachAssets>
        </ShareCreation>
        <PostButton>
          <AssetButton>
            <img src="/images/schedule-icon.png"></img>
          </AssetButton>
          <AssetButton>Post</AssetButton>
        </PostButton>
      </Content>
    </Container>
}
    </>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    padding: 10px;
    img {
      pointer-events: none;
      width: 100%;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;

  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 45px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  margin-right: 10px;
  border: none;
  padding: 12px;
`;

const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  ${AssetButton} {
    width: 45px;
    img {
      width: 100%;
      background-color: transparent;
    }
  }
`;

const PostButton = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 12px 5px;

  ${AssetButton} {
    border-radius: 15px;
    padding: 4px 16px;
    height: 30px;
    font-size: 15px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.3);
    &:first-child {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1px;
      box-sizing: content-box;
      background-color: transparent;
      img {
        width: 20px;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.06);
      }
    }
  }
`;

const Editor = styled.div`
  display: flex;
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }

  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
export default PostModal;
