import React, { useState, useEffect } from "react";
import { FaPlus, FaTimesCircle } from "react-icons/fa"
const FileUpload = (props) => {
    const [fileUploadArray, setFileUploadArray] = useState([]);
    const [localFormData, setLocalFormData] = useState([]);

    const removeFromLocalArray = (e, i) => {
        e.preventDefault()
        let newArray = [...fileUploadArray]
        newArray.splice(i, 1);
        setFileUploadArray(newArray);

        let newLocalFOrmData = [...localFormData]
        newLocalFOrmData.splice(i, 1);
        setLocalFormData(newLocalFOrmData)
    }

    useEffect(() => {
        props.triggerUpload(localFormData)

    }, [localFormData, props])

    const uploadMultipleFiles = (e) => {
        e.preventDefault();

        for (const key of Object.keys(e.target.files)) {
            setLocalFormData([...localFormData, e.target.files[key]])
            setFileUploadArray([...fileUploadArray, URL.createObjectURL(e.target.files[key])]);
        }
    };

    return (

        <>
            {fileUploadArray.map((url, i) => (
                <div key={i} className="col-6 col-md-3">
                    <div className="card img-upload" style={{ padding: "10px" }}>
                        <button className="btn close" onClick={(e) => removeFromLocalArray(e, i)}><FaTimesCircle /></button>
                        <img src={url} alt="..." className="img-fluid" />
                    </div>
                </div>
            ))}

            <div className="col-6 col-md-3 ">
                <div className="fileUploadField">
                    <input type="file" className="form-control inputfile" onChange={uploadMultipleFiles}
                    accept="image/png, image/jpeg, image/jpg, image/webp"
                    />
                    <label>
                        <FaPlus size={40} /><br />
                        Add Image
                        <small>Image maximum width should be 1000px<br />
                        Image max size should be under 100kb</small>

                    </label>
                </div>
            </div>
        </>

    );
};

export default FileUpload;
