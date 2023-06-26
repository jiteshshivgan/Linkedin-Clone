import styled from "styled-components";

function RightSide(props) {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>LinkedIn News</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <div>
              <span>Skills to ace business development</span>
              <span>23h ago</span>
            </div>
          </li>
          <li>
            <div>
              <span>An IIT student Jitesh got 15 job offers</span>
              <span>1d ago</span>
            </div>
          </li>
          <li>
            <div>
              <span>Density -A cryptocurrency derivatice exchange raises $10M dollar funding </span>
              <span>1d ago</span>
            </div>
          </li>
          <li>
            <div>
              <span>Antino -IT solution provider co-founder Vinay Krishna Gupta got recognized as Top business leaders of 2023. </span>
              <span>1d ago</span>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          Show more
          <img src="/images/show-more-icon.png"></img>
        </Recommendation>
      </FollowCard>
    </Container>
  );
}

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 12px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ol`
  position: relative;
  list-style: disc;
  padding: 0px 15px;
  font-weight: 550;
  li::marker{
    font-size: 17px;
  }
  li {
    margin: 12px 0px;
    position: relative;
    font-size: 13px;

    & > div {
      display: flex;
      flex-direction: column;
      text-align: left;

      span{
        line-height: 1.333;
        padding: 2px 0px;
      }
      span:last-child{
        color: rgba(0,0,0,0.6);
        font-size: 11px;
      }
    }

    
  }
`;


const Recommendation = styled.a`
  display: flex;
  align-items: center;
  padding: 0px 12px;
  font-size: 13px;
  color: rgba(0,0,0,0.6);
  img{
    height: 13px;
    width: 13px;
    padding: 0px 5px;
  }
`;
export default RightSide;
