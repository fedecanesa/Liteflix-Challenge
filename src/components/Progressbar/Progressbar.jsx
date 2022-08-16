import React, { useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useScreenSize from '../../hooks/useScreenSize';
import PropTypes from 'prop-types';
import './progressbar.scss';

const Progressbar = ({
    error,
    handlerCancelProgress,
    handlerRetryUploadMovie,
    progress,
    setProgress
}) => {

    const { width } = useScreenSize();
    const theme = createTheme({
        palette: {
            primary: {
                main: "#64EEBC"
            },
            error: {
                main: "#FF0000"
            }
        },
    });

    useEffect(() => {
        const identity = setInterval(scene, 60);
        function scene() {
            if (progress >= 100) {
                clearInterval(identity);
            } else {
                progress++;
                setProgress(progress++)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div className='progress__loadingContainer'>
                {
                    error
                        ? <div className='loadingContainer__text'><h4><span>¡ERROR!</span> NO SE PUDO CARGAR LA PELÍCULA</h4></div>
                        : progress === 100
                            ? <div className='loadingContainer__text'><h4><span>{progress}</span>% cargado </h4></div>
                            : <div className='loadingContainer__text'><h4>Cargando <span>{progress}</span>%</h4></div>
                }

            </div>

            <LinearProgress
                variant="determinate"
                value={progress}
                style={{
                    display: "flex",
                    alignItems: "center",
                    width: `${width <= 1000 ? '50%' : '602px'}`,
                    minWidth: "327px",
                    height: "4px",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    margin: "20px auto",
                }}
                color={error ? 'error' : 'primary'}
            />
            <div className='progress__buttonContainer'>
                {
                    error
                        ? <button
                            type='button'
                            onClick={handlerRetryUploadMovie}
                        >
                            reintentar
                        </button>
                        : progress === 100
                            ? <button
                                type='button'
                                className='done'
                            >
                                ¡Listo!
                            </button>
                            : <button
                                type='button'
                                onClick={handlerCancelProgress}
                            >
                                cancelar
                            </button>
                }
            </div>

        </ThemeProvider >

    );

}

Progressbar.propTypes = {
    error: PropTypes.bool,
    handlerCancelProgress: PropTypes.func,
    handlerRetryUploadMovie: PropTypes.func,
    progress: PropTypes.number,
    setProgress: PropTypes.func,
}

export default Progressbar