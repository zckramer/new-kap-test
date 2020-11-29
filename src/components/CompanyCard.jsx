const CompanyCard = (props) => {
    const profile = props.data;
    return (
        <div className="Company-Card">
            <div className="Company-Card__Header" onClick={()=>window.open(profile.website)}>
            <a className="Company-Card__Company-Name" href={profile.website} >{profile.companyName}</a>
                <img className="Company-Card__Company-Logo" src={profile.image} />    
            </div>
            <div className="Company-Card__Body">
                <div className='Card-Data'>
                    <div className='Card-Data__Item'>
                        <span>Symbol: </span> <span id="Card-Data__Symbol" >{profile.symbol}</span>
                    </div>
                    <hr />
                    <div className='Card-Data__Item'>
                        <span>CEO: </span> <span id="Card-Data__CEO" >{profile.ceo} </span>
                    </div>
                    <hr />
                    <div className='Card-Data__Item'>
                        <span>Exchange: </span> <span id="Card-Data__Exchange" >{profile.exchange} </span>
                    </div>
                    <hr />
                    <div className='Card-Data__Item'>
                        <span>Industry: </span> <span id="Card-Data__Industry" >{profile.industry} </span>
                    </div>
                    <div className='Card-Data__Item'>
                        <span id="Card-Data__Sector" >{profile.sector} </span>
                    </div>
                    <hr />
                    <div className='Card-Data__Item'>
                        <span>Changes: </span>
                        <span 
                        id="Card-Data__Changes"
                        style={profile.changes < 0 ? 
                        {color: 'red'} : {color: 'green'}}>
                        {profile.changes}
                        </span>
                    </div>
                    <hr />
                    <div className='Card-Data__Item'>
                        <span>Price: </span> <span id="Card-Data__Price" >{profile.price} </span>
                    </div>
                    <hr />
                    <div className='Card-Data__Item'>
                        <span>Beta: </span> <span id="Card-Data__Beta" >{profile.beta} </span>
                    </div>
                    <hr />
                    <div className='Card-Data__Item'>
                        <span>Volume Avg: </span> <span id="Card-Data__Volume-Average" >{profile.volAvg} </span>
                    </div>
		        </div>            
                <div className="Card-Data__Description" >{profile.description}</div>
            </div>
        </div>
    )
}

export default CompanyCard;