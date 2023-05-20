import img from './1474.gif';

const ErrorMessage = () => {
    return (
        // <img src={process.env.PUBLIC_URL + '/1474.gif'} />
        <>
        <div>
            {/* <p>We have an error.</p> */}
            <img
                style={{
                    display: 'block',
                    width: "100px",
                    height: "120px",
                    objectFit: 'contain',
                    margin: "0 auto"
                }}
                src={img} alt="Error"
            />
            <p style={{
                    display: 'block',
                    width: "120px",
                    color: "red",
                    margin: "0 auto"
                }}>We have an error!!!</p>
            </div>
        </>

    )
}

export default ErrorMessage;