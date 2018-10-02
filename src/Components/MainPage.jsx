import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar.jsx";
import { Grid, Icon, Card , Image} from "semantic-ui-react";
import BookShelf from "./BookShelf";
import { SearchBar } from "./SearchBar";
import { logout } from "../Redux/Actions/ActLogout";
import bookbuddyicon from "../images/bookbuddyicon.png";

class MainPage extends React.Component {
  componentDidMount() {
    if (!this.props.userInfo.loginSuccess) {
      this.props.logout();
    }
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <NavBar />
        <Grid celled="internally">
          <Grid.Row>
          <Grid.Column width={3}>
            <h1>Profile</h1>
            {/* <Card>
                <Image src={bookbuddyicon} />
                <Card.Content>
                  <Card.Header>{username}</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2018</span>
                  </Card.Meta>
                  <Card.Description>{about}</Card.Description>
                </Card.Content>
            </Card> */}
            <div>Name: Sloth</div>
            <div>Rating: 5 Stars!</div>
            <div>Bio: I am a sloth</div>
          </Grid.Column>
          <Grid.Column width={10} textAlign='center'>
            <div>
              <SearchBar />
              <Icon name="search" />
            </div>
            <div>
            <BookShelf />
            </div>
          </Grid.Column>
          <Grid.Column width={3}>
            <Footer />
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
export default Connect;
