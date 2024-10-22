/* eslint-disable react/prop-types */
export default function MessageBody({frmMessages, body}) {
    return(
        <div id="MessageBody" className={`frmbody overflow-auto bg-transparent px-0 py-0 w-full`} >
            {body}
        </div>
    )
}