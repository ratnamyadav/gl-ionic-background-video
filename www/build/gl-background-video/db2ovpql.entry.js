const t=window.GlBackgroundVideo.h;class e{constructor(){this.muted=!0}componentDidLoad(){this.muted&&(this.videoElement.muted=!0)}render(){return t("video",{autoplay:!0,loop:!0,playsinline:!0,preload:"auto",muted:this.muted,src:this.src,poster:this.poster})}static get is(){return"gl-background-video"}static get encapsulation(){return"shadow"}static get properties(){return{muted:{type:Boolean,attr:"muted"},poster:{type:String,attr:"poster"},src:{type:String,attr:"src"},videoElement:{elementRef:!0}}}static get style(){return"video{position:fixed;top:50%;left:50%;width:100%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}:host-context(.plt-android) video[poster]{-o-object-fit:none;object-fit:none}"}}export{e as GlBackgroundVideo};