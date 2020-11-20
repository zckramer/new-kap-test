const CompanyCard = (props) => {
    return (
        <div className="Company-Card">
            <div className="Company-Card__Header">
                <h3 className="Company-Card__Company-Name">{props.companyName}</h3>
                <img className="Company-Card__Company-Logo" src={props.image} />
                
            </div>
        </div>
    )
}

export default CompanyCard;