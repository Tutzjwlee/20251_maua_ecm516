import'../styles/style.css'
function BigBoxStyles(){
    return {
        backgroundColor: 'rgb(211, 211, 211)',
        width: '500px',
        height: '150px',
        top: '0',
        left: '0',
        right: '0',
        margin: '0 auto',
        textAlign: 'center',
        fontFamily: 'Arial',
        fontSize: '0.5rem',
        border: '0.1px solid black',
    }   
}
function BigBox(){
    return (
        <div style={BigBoxStyles()}>
            <h1>Profissionais de saúde</h1>
            <div style={{backgroundColor: 'rgb(232, 232, 232)',
            width: '100%',
           height: '73%',
            top: 'auto',
            left: '0',
            right: '0',
            margin: '0 auto',
            display: 'flex', 
            bottom: '0',
            justifyContent: 'space-between', 
            columnGap: '3rem', 
            border: '0.1px solid black',
            }}>
                <div className="container-doctor">
                    <div className="container-leg">
                       <p>senhor batata</p>
                       </div>
                    <div className="container-img"><p>imagen</p>
                    </div>
                    
                </div>
                <div className="container-doctor">oi</div>
                <div className="container-doctor">oi</div>
            </div>
            
        </div>
    );
}
export default BigBox;
