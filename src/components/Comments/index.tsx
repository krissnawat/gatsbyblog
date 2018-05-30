import * as React from "react"
import * as config from "../../constants"
import Disqus from "react-disqus-comments";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import Avatar from "react-md/lib/Avatars";
import FontIcon from "react-md/lib/FontIcons";
import Snackbar from "react-md/lib/Snackbars";

class Comments extends React.Component< CommentProps, CommentState>{
  constructor(props: CommentProps) {
    super(props);
    this.state = {
      toasts: [],
      mobile: true
    };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }

  notifyAboutComment() {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: "New comment available!" });
    this.setState({ toasts });
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }

  render() {
    const { title, category_id, link } = this.props;
    if (!config.DISQUS) {
      return null;
    }

    return (
      <Card className="md-grid md-cell md-cell--12">
        <CardTitle
          title="Comments"
          avatar={<Avatar icon={<FontIcon>comment</FontIcon>} />}
          expander={this.state.mobile}
        />
        <CardText expandable={this.state.mobile}>
          <Disqus
            shortname={config.DISQUS}
            identifier={title}
            title={title}
            url={link}
            onNewComment={this.notifyAboutComment}
          />
        </CardText>
        <Snackbar
          toasts={this.state.toasts}
          onDismiss={this.onSnackbarDismiss}
        />
      </Card>
    );
  }

}

export default Comments

export interface CommentProps {
  title: string
  category_id: string
  link: string
}

export interface CommentState {
  toasts: CommentToasts[]
  mobile: boolean
}

export interface CommentToasts {
  text: string
}