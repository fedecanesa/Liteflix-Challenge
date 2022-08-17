import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../features/movies/moviesSlice';
import { close, fill } from '../../utils/image';
import { Button, Progressbar, Navbar } from '../';
import useScreenSize from '../../hooks/useScreenSize';
import PropTypes from 'prop-types';
import './modal.scss';


const Modal = ({ handlerModal, handlerMenu }) => {
    const wrapperRef = useRef(null);
    const dispatch = useDispatch();
    const { width } = useScreenSize();
    const [progress, setProgress] = useState(1);
    const [uploading, setUploading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [success, setSuccess] = useState(false);
    let [newMovie, setNewMovie] = useState({
        title: "",
        image: ""
    })

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const handlerNewMovie = (e) => {
        const { target: { value } } = e;
        setNewMovie({ ...newMovie, title: value })
    }

    const handlerCancelProgress = () => {
        setNewMovie({ ...newMovie, image: "" })
        setIsError(true);
    }

    const handlerRetryUploadMovie = () => {
        setUploading(false);
        setProgress(1);
        setIsError(false);
    }

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        setUploading(true)

        if (newFile) {
            let file = newFile;
            let reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = function () {
                setNewMovie({ ...newMovie, image: reader.result })
            };
            reader.onerror = function () {
                console.log(reader.error);
            };
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addMovie(newMovie));
        setSuccess(true);
    }



    return (
        <div className='overlay'>
            <form
                className='modal'
                onSubmit={handleSubmit}
            >
                {
                    width <= 1000 &&
                    <Navbar onClick={handlerMenu} />
                }
                <div className='modal__header'>
                    {
                        success
                            ? width > 1000
                                ?
                                <h3 className='modal__header--success'>
                                    <span>lite</span>flix
                                </h3>
                                : <></>
                            : <h3 className='modal__header--loading'>agregar película</h3>
                    }
                    {
                        width > 1000 &&
                        <div className='modal__header--img'>
                            <img src={close} alt="" onClick={handlerModal} />
                        </div>
                    }

                </div>

                {
                    success
                        ? <div className='modal__movieUpload'>
                            <h3>¡felicitaciones!</h3>
                            <p>{newMovie.title} fue correctamente subida</p>
                        </div>
                        : <>
                            {
                                uploading
                                    ? <Progressbar
                                        error={isError}
                                        handlerCancelProgress={handlerCancelProgress}
                                        handlerRetryUploadMovie={handlerRetryUploadMovie}
                                        progress={progress}
                                        setProgress={setProgress}
                                    />
                                    : <div
                                        ref={wrapperRef}
                                        className="drop-file-input"
                                        onDragEnter={onDragEnter}
                                        onDragLeave={onDragLeave}
                                        onDrop={onDrop}
                                    >
                                        <div className="drop-file-input__label">
                                            <img src={fill} alt="Fill" />
                                            {
                                                width <= 1000
                                                    ? <p>Agregá un archivo</p>
                                                    : <p>Agregá un archivo o arrastralo y soltalo aquí</p>

                                            }
                                        </div>
                                        <input type="file" value="" onChange={onFileDrop} />
                                    </div>
                            }
                            <div className='modal__input--container'>
                                <input
                                    type="text"
                                    placeholder='TÍTULO'
                                    className='modal__input'
                                    onChange={handlerNewMovie}
                                />
                            </div>
                        </>
                }

                <div className='modal__button'>
                    {
                        !success &&
                        <Button
                            content={"subir película"}
                            disabled={(progress === 100 && newMovie?.title?.length > 0 && newMovie?.image) ? false : true}
                            name={"Reproducir"}
                            type={"submit"}
                            color={(progress === 100 && newMovie?.title?.length > 0 && newMovie?.image) ? '#FFFFFF' : "#919191"}
                            textColor={"#242424"}
                            border={"none"}
                        />
                    }
                    {
                        (success || width <= 1000) &&
                        <Button
                            content={success ? "ir a home" : "salir"}
                            disabled={false}
                            name={"close"}
                            type={"button"}
                            color={success ? '#FFFFFF' : "rgba(36, 36, 36, 0.5)"}
                            textColor={success ? "#242424" : "#FFFFFF"}
                            border={success ? 'none' : "1px solid rgba(255, 255, 255, 0.5)"}
                            onClick={handlerModal}
                        />
                    }
                </div>
            </form >
        </div >
    )
}

Modal.propTypes = {
    process: PropTypes.number,
    setProgress: PropTypes.func,
    uploading: PropTypes.bool,
    setUploading: PropTypes.func,
    isError: PropTypes.bool,
    setIsError: PropTypes.func,
    success: PropTypes.bool,
    setSuccess: PropTypes.func,
    newMovie: PropTypes.object,
    setNewMovie: PropTypes.func,
    onDragEnter: PropTypes.func,
    onDragLeave: PropTypes.func,
    onDrop: PropTypes.func,
    handlerNewMovie: PropTypes.func,
    handlerCancelProgress: PropTypes.func,
    handlerRetryUploadMovie: PropTypes.func,
    onFileDrop: PropTypes.func,
    goToHome: PropTypes.func,
    handleSubmit: PropTypes.func,
}

export default Modal;