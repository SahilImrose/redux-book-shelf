import React from "react";
import {
  HiPlusCircle
} from 'react-icons/hi';
import { useDispatch } from "react-redux";
import { AddToReadingList } from "../../Redux/Actions/Actions";
import styles from './book.module.css';


const SingleBook = (props) => {
  const dispatch = useDispatch()
  const { title, author, coverImageUrl, synopsis } = props.book;


  return (
    <div className='card d-flex mb-3 p-3'
      style={{ position: 'relative' }}
    >
      <div className='row'>
        <div className='col-md-3'>
          <img className="img-fluid" src={coverImageUrl} alt='' />
        </div>
        <div className='col-md-9'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <h6>{author}</h6>
            <p className='card-text'>{synopsis.slice(0, 500)} ... <br /><span style={{ color: 'salmon' }}> add this book to read more </span></p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  How to add Book 🤔
</button>
            
            <div class="modal-dialog modal-dialog-centered">
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Click the plus button at right of book
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.control_icons} >
        {/* <HiMinusCircle title="Remove from list" className={styles.minus_icon} /> */}
        <HiPlusCircle onClick={() => dispatch(AddToReadingList(props.book))} title="Add to Reading" className={styles.plus_icon} />
        {/* <HiCheckCircle title="Mark as Finish" className={styles.check_icon} /> */}
      </div>
    </div>
  );
};

export default SingleBook;
