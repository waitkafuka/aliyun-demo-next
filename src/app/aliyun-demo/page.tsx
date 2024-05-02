'use client';
import { useEffect } from "react"

export default function Home() {

    useEffect(() => {
        var player = new window.Aliplayer(
            {
                id: "J_prismPlayer",
                source: "https://script.zxxk.com/zxxkvideo/ued/society.mp4", // 播放地址，可以是第三方点播地址，或阿里云点播服务中的播放地址。
            },
            function (player: any) {
                console.log("The player is created.");
            }
        );
    }, [])
    return (<div id="J_prismPlayer"></div>)
}