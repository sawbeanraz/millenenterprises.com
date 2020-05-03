import React from 'react';
import { graphql } from 'gatsby';

const PostDetail = ({ post }) => {
  const {
    bigImage, likes, id, username, weeksAgo, text, avatar,
  } = post;

  const { big } = bigImage.childImageSharp;

  // const PostDetails = () => (
  //   <div
  //     css={{
  //       ...scale(-2 / 5),
  //       lineHeight: typography.options.baseLineHeight,
  //     }}
  //   >
  //     <div
  //       css={{
  //         marginBottom: rhythm(1),
  //         overflow: 'hidden',
  //       }}
  //     >
  //       <strong
  //         data-testid="post-detail-likes"
  //         css={{
  //           float: 'left',
  //         }}
  //       >
  //         {likes}
  //         {' '}
  //         likes
  //       </strong>
  //       <strong
  //         css={{
  //           color: 'rgba(0,0,0,0.4)',
  //           float: 'right',
  //         }}
  //       >
  //         {weeksAgo}
  //         w
  //       </strong>
  //     </div>
  //     <div data-testid="post-detail-text">
  //       <strong>{username}</strong>
  //       {' '}
  //       {text}
  //     </div>
  //   </div>
  // );

  return (
    <div
      onClick={e => e.stopPropagation()}
      css={{
        background: 'white',
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        width: '100%',
        [presets.Tablet]: {
          flexDirection: 'row-reverse',
          marginTop: rhythm(1),
        },
      }}
    >
      <div
        css={{
          padding: rhythm(3 / 4),
          paddingBottom: 0,
          [presets.Tablet]: {
            width: rhythm(13),
            padding: rhythm(1),
          },
        }}
      >
        <div
          css={{
            display: 'none',
            [presets.Tablet]: {
              display: 'block',
            },
          }}
        >
          <PostDetails />
        </div>
      </div>
      <div
        to={`/${id}/`}
        css={{
          display: 'block',
          backgroundColor: 'lightgray',
          flex: '1 0 0%',
          width: '100%',
          position: 'relative',
        }}
      >
        <div
          css={{
            flexDirection: 'column',
            flexShrink: 0,
            position: 'relative',
            paddingBottom: '100%',
            overflow: 'hidden',
          }}
        >
          <img
            alt=""
            key={big.src}
            src={big.src}
            srcSet={big.srcSet}
            fluid="(min-width: 640px) 640px, 100vw"
            css={{
              margin: 0,
              height: '100%',
              width: '100%',
              verticalAlign: 'baseline',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          />
          <div
            css={{
              flexDirection: 'column',
              flexShrink: 0,
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          />
        </div>
      </div>
      <div
        css={{
          background: 'white',
          padding: rhythm(3 / 4),
          display: 'block',
          [presets.Tablet]: {
            display: 'none',
          },
        }}
      >
        <PostDetails />
      </div>
    </div>
  );
};

export default PostDetail;

export const postDetailFragment = graphql`
  fragment PostDetail_details on ProductsYaml {
    id
    bigImage: image {
      childImageSharp {
        big: fluid(maxWidth: 640) {
          src
          srcSet
        }
      }
    }
  }
`;
