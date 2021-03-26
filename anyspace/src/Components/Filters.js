import React from "react";

const Filters = (props) => {


    return (



        <React.Fragment>

            <div className="filers">

                <div className="h6">
                    Minimum Space (sq.ft)
                    </div>
                <ul className="filterlist">
                    <li className="custom-control custom-radio">
                        <input type="radio" name="space" id="s0" className="custom-control-input"
                            onChange={() => props.updateFilter({ minSpace: 0, maxSpace: null })}
                        />
                        <label htmlFor="s0" className="custom-control-label">Any</label>
                    </li>
                    <li className="custom-control custom-radio">
                        <input type="radio" name="space" id="s1" className="custom-control-input"
                            onChange={() => props.updateFilter({ minSpace: 0, maxSpace: 5000 })}
                        />
                        <label htmlFor="s1" className="custom-control-label">Up to 5000</label>
                    </li>
                    <li className="custom-control custom-radio">
                        <input type="radio" name="space" id="s2" className="custom-control-input"
                            onChange={() => props.updateFilter({ minSpace: 5000, maxSpace: 10000 })}
                        />
                        <label htmlFor="s2" className="custom-control-label">5,000 - 10,000 </label>
                    </li>
                    <li className="custom-control  custom-radio">
                        <input type="radio" name="space" id="s3" className="custom-control-input"
                            onChange={() => props.updateFilter({ minSpace: 10000, maxSpace: 30000 })}
                        />
                        <label htmlFor="s3" className="custom-control-label">10,000 - 30,000</label>
                    </li>
                    <li className="custom-control  custom-radio">
                        <input type="radio" name="space" id="s4" className="custom-control-input"
                            onChange={() => props.updateFilter({ minSpace: 30000, maxSpace: null })}
                        />
                        <label htmlFor="s4" className="custom-control-label">Above 30,000 </label>
                    </li>
                </ul>


                <div className="h6">
                    Regulations
                    </div>
                <ul className="filterlist">
                    <li className="custom-control  custom-checkbox">
                        <input type="checkbox" name="space" id="Regulations1" className="custom-control-input"
                            onChange={() => {
                                document.getElementById("Regulations2").checked = false;
                                document.getElementById("Regulations3").checked = false;
                                document.getElementById("Regulations4").checked = false;
                                props.updateFilter({
                                    FSSAIApproved: null,
                                    drugLicensed: null,
                                    exciseApproved: null,
                                })

                            }} />
                        <label htmlFor="Regulations1" className="custom-control-label">Doesn't matters</label>
                    </li>

                    <li className="custom-control custom-checkbox">
                        <input type="checkbox" name="space" id="Regulations2" className="custom-control-input"
                            onChange={() => {
                                document.getElementById("Regulations1").checked = false;
                                props.updateFilter({ FSSAIApproved: true });
                            }} />
                        <label htmlFor="Regulations2" className="custom-control-label">FSSAI approved</label>
                    </li>
                    <li className="custom-control custom-checkbox">
                        <input type="checkbox" name="space" id="Regulations3" className="custom-control-input"
                            onChange={() => {
                                document.getElementById("Regulations1").checked = false;
                                props.updateFilter({ drugLicensed: true })
                            }} />
                        <label htmlFor="Regulations3" className="custom-control-label">Drug Licensed</label>
                    </li>
                    <li className="custom-control  custom-checkbox">
                        <input type="checkbox" name="space" id="Regulations4" className="custom-control-input"
                            onChange={() => {
                                document.getElementById("Regulations1").checked = false;
                                props.updateFilter({ exciseApproved: true });
                            }} />
                        <label htmlFor="Regulations4" className="custom-control-label">Excise approved</label>
                    </li>

                </ul>
            </div>



        </React.Fragment>

    )


}

export default Filters;