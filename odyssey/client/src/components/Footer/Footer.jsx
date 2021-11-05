import React, { Fragment, Component } from 'react';
import { GitHub, Twitter, Instagram  } from '@material-ui/icons';


import {
  Container,
  IconButton,
  Tooltip,
} from '@material-ui/core';



class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="bg-first py-5">
          <div>
            <Container maxWidth="md" className="text-center">
              <h1 className="display-3 mb-4 text-white font-weight-bold">
                Stay up to date
              </h1>
              <p className="font-size-lg text-white-50">
                Follow me on any of our social media accounts!!
              </p>
            </Container>
            <div className="divider border-2 d-sm-none d-md-block rounded-circle border-white bg-white opacity-1 mx-auto mb-4 mt-5 w-50" />
            <div className="d-flex justify-content-center">
              
              <Tooltip arrow title="Twitter">
                <IconButton
                  className="nav-link text-white-50"
                  href="https:&#x2F;&#x2F;twitter.com&#x2F;uifort1"
                  rel="nofollow"
                  target="_blank">
                  <span className="btn-wrapper--icon">
                <Twitter>
                      icon={['fab', 'twitter']}
                      className="font-size-xxl"
                    </Twitter>
                  </span>
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Instagram">
                <IconButton
                  className="nav-link text-white-50"
                  target="_blank">
                  <span className="btn-wrapper--icon">
                    <Instagram>
                      icon={['fab', 'instagram']}
                      className="font-size-xxl"
                    </Instagram>
                  </span>
                </IconButton>
              </Tooltip>
              
            
              <Tooltip arrow title="Github">
                <IconButton
                  className="nav-link text-white-50"
                  href="https://github.com/MonsoudZ"
                  rel="nofollow"
                  target="_blank">
                  <span className="btn-wrapper--icon">
                    <GitHub>
                      icon={['fab', 'github']}
                      className="font-size-xxl"
              </GitHub>
                  </span>
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footer;