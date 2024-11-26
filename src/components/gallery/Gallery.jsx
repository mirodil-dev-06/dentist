import React, { useState } from 'react';
import '../gallery/Gallery.scss';
import img from '../../assets/images/image.png'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Tooltip } from 'antd';


const Gallery = () => {
  const [mainImage, setMainImage] = useState(img);

  const images = [
    img1,
    img2,
    img3,
  ];

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div>
        <div className='gallery'>
      <div className="gallery__image">
        <img src={mainImage} alt="Main" />

        <div className="gallery__users">
            <h3>Happy Patients</h3>
    <Avatar.Group
      size="large"
      max={{
        count: 3,
        style: {
          color: '#f56a00',
          backgroundColor: '#fde3cf',
          cursor: 'pointer',
        },
        popover: {
          trigger: 'click',
        },
      }}
    >
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        K
      </Avatar>
      
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: '#1677ff',
        }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
    
        </div>
      </div>
      <div className="gallery__thumbnail-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleImageClick(image)}
            className="thumbnail"
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
