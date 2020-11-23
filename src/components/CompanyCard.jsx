const CompanyCard = (props) => {
    const profile = props.data;
    return (
        <div className="Company-Card">
            <div className="Company-Card__Header">
                <h3 className="Company-Card__Company-Name">{profile.companyName}</h3>
                <img className="Company-Card__Company-Logo" src={profile.image} />    
            </div>
            <div className="Company-Card__Body">
                <div className='Card-Data'>
                    <span id="Card-Data__Name" >{<a href={profile.website} >{profile.companyName}</a>}</span>
                    <hr />
                    <span id="Card-Data__Symbol" >{profile.symbol}</span>
                    <hr />
                    <span id="Card-Data__CEO" >{profile.ceo} </span>
                    <hr />
                    <span id="Card-Data__Exchange" >{profile.exchange} </span>
                    <hr />
                    <span id="Card-Data__Industry" >{profile.industry} </span>
                    <hr />
                    <span id="Card-Data__Sector" >{profile.sector} </span>
                    <hr />
                    <span 
                    id="Card-Data__Changes-Percent" 
                    style={profile.changesPercent && profile.changesPercent.includes("-") ? 
                    {color: 'red'} : {color: 'green'}}>
                    {profile.changesPercent}
                    </span>
                    <hr />
                    <span 
                    id="Card-Data__Changes"
                    style={profile.changes < 0 ? 
                    {color: 'red'} : {color: 'green'}}>
                    {profile.changes}
                    </span>
                <hr />
                <li>
                    <span id="Card-Data__Price" >{profile.price} </span>
                </li>
                <hr />
                <li>
                    <span id="Card-Data__Beta" >{profile.beta} </span>
                </li>
                <hr />
                <li>
                    <span id="Card-Data__Volume-Average" >{profile.volAvg} </span>
                </li>
                <hr />
                <li>
                    <div id="Card-Data__Description" >{profile.description}</div>
                </li>
		        </div>            
            </div>
        </div>
    )
}

export default CompanyCard;