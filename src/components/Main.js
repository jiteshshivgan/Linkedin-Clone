import styled from "styled-components";
import PostModal from "./PostModal";
import {useState} from "react";

function Main(props) {

  const [showModal, setShowModal]=useState("close");
  
  const handleClick=(e)=>{
    e.preventDefault();

    if(e.target!==e.currentTarget){
      return;
    }

    switch (showModal){
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };

  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.png" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video-icon.png" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/event-icon.png" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article-icon.png" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.png" />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImg>
            <a>
              <img src="/images/shared-image.jpg" alt="" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src="/images/like-icon.png" alt="" />
                <img src="/images/clapping-icon.png" alt="" />
                <img src="/images/heart-icon.png" alt="" />
                <span>Jitesh Shivgan and 74 others</span>
              </button>
            </li>
            <li>
              <a>22 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/like1-icon.png"></img>
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comment-icon.png"></img>
              <span>Comments</span>
            </button>
            <button>
              <img src="/images/repost-icon.png"></img>
              <span>Repost</span>
            </button>
            <button>
              <img src="/images/share-icon.png"></img>
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
      <PostModal/>
    </Container>
  );
}

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      img {
        height: 30px;
        width: 30px;
      }
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        text-align: left;
        background-color: white;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;
  padding: 12px 16px 0px;
  margin-bottom: 8px;
  a {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: left;
    margin-right: 12px;
    overflow: hidden;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  a {
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  margin: 0 12px;
  padding: 8px;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  color: rgba(0, 0, 0, 0.6);
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 25px;
      width: fit-content;
      background: transparent;
      border: none;
      color: rgba(0, 0, 0, 0.6);
      img {
        height: 100%;
        display: flex;
      }
    }
  }
`;

const SocialActions=styled.div`
    display: flex;
    border-bottom: 8px;
    line-height: 1.3;
    align-items: center;
    justify-content: space-around;
    overflow: auto;
    padding: 4px 8px;
    color: rgba(0, 0, 0, 0.6);
    min-height: 40px;
    button{
        height: 40px;
        width: fit-content;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px;
        img{
            height:100%;
            padding: 2px 5px;
        }

        @media (min-width: 768px){
            span{
                margin-left: 8px;
            }
        }
    }
`;

export default Main;
