import Box from '@material-ui/core/Box';
import React, { useCallback } from 'react';
import Container from '@material-ui/core/Container'
import Image from 'react-bootstrap/Image'
import {Row, Col } from 'react-grid-system';
import InstaPostCss from '../InstaPost/InstaPost.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'

class InstaPost extends React.Component {

    
    constructor(props) {
        super()
        this.state = {
            userName:'',
            mediaId:'',
            imageId:[],
            imageUrl:[]
        };
        // this.fetchPost = this.fetchPost.bind(this);   
    
    }

    componentDidMount() {
        this.fetchPost();
        this.fetchImage();
      }

      fetchPost(){
                // Make a request for a user with a given ID
                axios.get('https://graph.instagram.com/17841438945925077?fields=id,username,account_type,media&access_token=IGQVJYcVZAaTkoyWHZA2Sm9ZARFJVdTg0LWpWNHNXajFnMi1mTzdzdU41NWpwZADUxMXF3ZA0QxNnBQM1QxLWg2RVFJelg0Q3paYjgwVE9ya2NQOUtIYWhZAY0NfbnJ6X0F2U0kxX09MUHhR')
                .then(response=> {
                    // console.log(response.data.username)
                  const userName = response.data.username;
                //   console.log(response.data.media.data[0].id)
                 // const media=response.data.media
                  this.setState({userName});
                  this.setState({
                      mediaId:response.data.media.data[0].id
                  })
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
      }

      fetchImage(){
        axios.get('https://graph.instagram.com/17863725979977364?fields=id,media_type,media_url,username,timestamp,children&access_token=IGQVJYcVZAaTkoyWHZA2Sm9ZARFJVdTg0LWpWNHNXajFnMi1mTzdzdU41NWpwZADUxMXF3ZA0QxNnBQM1QxLWg2RVFJelg0Q3paYjgwVE9ya2NQOUtIYWhZAY0NfbnJ6X0F2U0kxX09MUHhR')
        .then(response=> {
            // console.log(response.data.children.data)
          const imageId = response.data.children.data;
        //   console.log(response.data.children.data[0].id)
         // const media=response.data.media
          this.setState({imageId});

          this.state.imageId.map((item, i) =>{
              console.log("fetching image url for image"+i+"with imageId "+item.id);

            axios.get('https://graph.instagram.com/'+item.id+'?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJYcVZAaTkoyWHZA2Sm9ZARFJVdTg0LWpWNHNXajFnMi1mTzdzdU41NWpwZADUxMXF3ZA0QxNnBQM1QxLWg2RVFJelg0Q3paYjgwVE9ya2NQOUtIYWhZAY0NfbnJ6X0F2U0kxX09MUHhR')
            .then(response=> {
            console.log("media url for item "+i+" "+response.data.media_url)
              const imageUrl = response.data.media_url;
             
              //this.setState({imageUrl:imageUrl});

              this.setState({
                imageUrl: [...this.state.imageUrl, imageUrl]
              })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

          })


    
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

      }
      
    

    
    render() {
        const userName = this.state.userName;
        const mediaId=this.state.mediaId;
        const imageUrl=this.state.imageUrl;
        console.log("imageUrl "+imageUrl)
        // const images = imageUrl.map(url => {
        //     return <img key={url} src={url} className="img-responsive" />
        //  });
  

        return (
                 <div className="InstaPostCss">
                 <h2>Instagram Profile</h2>
                 <label>User Name : {userName}</label><br/>
                 <label>Media Id : {mediaId}</label>

                {/* <div> {images}</div> */}

                
        { this.state.imageUrl.map(url => <img src={url} />)}
      
                
            </div>

        );
    }
}

export default InstaPost;