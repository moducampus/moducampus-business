import React, { Component } from 'react';

import Subtitle from 'components/commons/Subtitle';
import Subteam from 'components/commons/Subteam';

import "./Team.scss"

class Team extends Component {
    render() {
        const title = "TEAM";
        const teamData = [
            {position: "대표", name: "노태준", text:"가장 중요한 건 사람이라고 생각합니다."},
            {position: "디자이너", name: "채정훈", text:"Serendipity 끊임없이 노력했을 때 찾아노는 뜻밖의 행운."},
            {position: "경영지원", name: "박진호", text:"나무를 베는 데 6시간을 준다면, 4시간은 도끼날을 가는 데 쓸 것이다."},
            {position: "개발자", name: "조용진", text:"재밌는 것만 하고 싶어!"},
            {position: "개발자", name: "이동수", text:"같이 할 때의 가치는 더욱 커집니다."}
        ];
        
        const teamList = teamData.map(data =>( <Subteam className="subteam" key={data.name.toString()} position={data.position.toString()} name={data.name.toString()} text={data.text.toString()}/>));

        return (
            <div className="Team" id="team">
                <div className="container team-wrapper">
                    <Subtitle className="subtitle" title={title}/>
                    <div className="team-content">{teamList}</div>
                </div>
            </div>
        );
    }
}

export default Team;