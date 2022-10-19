import Image from "next/image"

const PartListView = (props) => {

    const { tokens } = props

    return (
        <div>
            <h5>Tokens Collected:<span id="result">&nbsp;{tokens.length}</span></h5>

            <div className="grid mb-4">
                {tokens.map((tokenURI, key) => {
                    console.log(tokenURI);
                    return (
                        <Image key={key} src={"/robots/" + "Buildbot" + ".png"} width={80} height={80} alt=""/>
                    )
                })}
            </div>
        </div>
    )
}

export default PartListView
