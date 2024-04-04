import React from 'react'

import classes from './index.module.scss'
import { Button } from '../../../Button';
import Image from 'next/image';
import { Media } from '../../../../../payload/payload-types';

const SocialMedia = ({ socialMedia } ) => {

  return (
    <div className={classes.socialLinks}>
      {socialMedia.map((item) => {

        const icon = item?.linkForSocialMedia?.icon as Media

        return (
          <Button
          key={item.linkForSocialMedia.label}
          el='link'
          href={item.linkForSocialMedia.url}
          newTab={true}
          >
            <Image
            src={icon?.url}
            alt={item.linkForSocialMedia.label}
            width={24}
            height={24}
            />
          </Button>
        )
      })}
    </div>
  );
}

export default SocialMedia