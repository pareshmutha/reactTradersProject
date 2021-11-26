/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react';

const imgUrls = ['https://source.unsplash.com/PC_lbSSxCZE/800x600','https://source.unsplash.com/lVmR1YaBGG4/800x600','https://source.unsplash.com/5KvPQc1Uklk/800x600','https://source.unsplash.com/GtYFwFrFbMA/800x600','https://source.unsplash.com/Igct8iZucFI/800x600','https://source.unsplash.com/M01DfkOqz7I/800x600','https://source.unsplash.com/MoI_cHNcSK8/800x600','https://source.unsplash.com/M0WbGFRTXqU/800x600','https://source.unsplash.com/s48nn4NtlZ4/800x600','https://source.unsplash.com/E4944K_4SvI/800x600','https://source.unsplash.com/F5Dxy9i8bxc/800x600','https://source.unsplash.com/iPum7Ket2jo/800x600'
];

const ImageGallery = (props) => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const openModal = (e, index) =>{
        setCurrentIndex(index);
      }
    const renderImageContent = (src, index) => {
    return (
      <div onClick={(e) => openModal(e, index)}>
        <img src={src} key={src} alt="no alt" />
      </div>
    ) 
  }
  const closeModal = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setCurrentIndex(null);

  }
 const findPrev = (e) =>{
    if (e !== undefined) {
      e.preventDefault();
    }
    setCurrentIndex(currentIndex - 1);
    
  }
  const findNext = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setCurrentIndex(currentIndex + 1);

  }
  
    return (
      <div className="gallery-container">
        <div className="gallery-grid">
          {imgUrls.map(renderImageContent)}
        </div>
        <GalleryModal 
          closeModal={closeModal} 
          findPrev={findPrev} 
          findNext={findNext} 
          hasPrev={currentIndex > 0} 
          hasNext={currentIndex + 1 < imgUrls.length} 
          src={imgUrls[currentIndex]} 
        />
      </div>
    )
};

const GalleryModal = (props) => {
    const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = props;
    const handleKeyDown = (e) => {
        if (e.keyCode === 27)
          props.closeModal();
        if (e.keyCode === 37 && props.hasPrev)
          props.findPrev();
        if (e.keyCode === 39 && props.hasNext)
          props.findNext();
      }
      document.body.addEventListener('keydown', handleKeyDown);
  
    
    if (!src) {
      return null;
    }
    return (
      <div>
        <div className="modalImageView-overlay" onClick={closeModal}></div>
        <div className="modalImageView">
          <div className='modalImageView-body'>
            <a href="#" className='modalImageView-close' onClick={closeModal} onKeyDown={handleKeyDown}>&times;</a>
            {hasPrev && <a href="#" className='modalImageView-prev' onClick={findPrev} onKeyDown={handleKeyDown}>&lsaquo;</a>}
            {hasNext && <a href="#" className='modalImageView-next' onClick={findNext} onKeyDown={handleKeyDown}>&rsaquo;</a>}
            <img src={src} alt="alt" />
          </div>
        </div>
      </div>
    )
}

export default ImageGallery;