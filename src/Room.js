import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
import { ZegoSuperBoardManager } from "zego-superboard-web";
import meetify from "./meetify.png"

const Room = () => {
  const { roomId } = useParams();
    const myMeeting = async ( element ) => {
        const appID = 498084597;
        const serverSecret = "d2e333bfa19b826711c847b6a5e39c72";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Aniket Nayak"
            );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.addPlugins({ZegoSuperBoardManager});
        zc.joinRoom({
            container: element,
            sharedLinks : [
                {
                    name: "Copy Link",
                    url: `http:localhost:3000/room/${roomId}`
                }

            ],
            whiteboardConfig: {            
              showAddImageButton: true, 
           },
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        });
    };

  return <div>
    <div className='meeting' ref={myMeeting} />
  </div>
}

export default Room;