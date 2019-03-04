import React, { Component } from 'react'
import { Segment, Container, Header, Grid, Button, Image } from 'semantic-ui-react';
import Comment from '../components/Comment';
import Thumbnail from '../components/Thumbnail';
import ContentSummary from '../components/ContentSummary';

import { connect } from 'react-redux';

import { saveCommentClick,
         getCommentClick } from '../actions/comment';;

class DramaInfo extends Component {
    constructor({match}){
        super();
        this.state ={
            id: match.params.id,
            data:{
                url :''
            },
            
        }

        this.saveComment = this.saveComment.bind(this);
        this.getComment = this.getComment.bind(this);
    }


    saveComment(commentObj){

        this.props.saveCommentClick(commentObj).then(
            ()=>{
                //console.log(this.props.commentSave);
                 if(this.props.commentSave.status=="SAVE_COMMENT_SUCCESS") {
                    alert("저장성공");
                    this.getComment();
                 }
                 else "저장실패";
            }
        )

    }

    getComment(e){
        console.log("get 실행")
        this.props.getCommentClick(this.state.id);
    }

    render() {
        return (
        <div>
            <Segment style={{ padding: '8em 0em'}} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column floated='left' width={4}>
                        <Image width="200px" src={this.state.data.url}></Image>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <ContentSummary data={this.state.data}></ContentSummary>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <div>별점 평균: {this.props.commentGet.average.toString().indexOf(".") > -1 ? this.props.commentGet.average.toFixed(2) : this.props.commentGet.average} 개</div>
                    </Grid.Row>
                    <Grid.Row>
                        <Comment saveComment={this.saveComment} getComment={this.getComment} commentData={this.props.commentGet.data}/>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
        )
    }

    componentDidMount(){
        const that = this;
        //redux로 바꺼야할듯?
        fetch(`/api/drama/${this.state.id}`)
        .then(function(response, data) {
            console.log(response);
            return response.json();
        })
        .then(function(data){
            console.log(data);
            that.setState({
                data: data
            })
        });

        this.getComment();
    }
}

const mapStateToProps = (state) => {
    console.log(state.comment.get("get"))
    return {
        commentSave: state.comment.get("save"),
        commentGet: state.comment.get("get")
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveCommentClick: (commentObj) => { 
            return dispatch(saveCommentClick(commentObj)); 
        },
        getCommentClick: (dramaId) => { 
            return dispatch(getCommentClick(dramaId)); 
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DramaInfo);


