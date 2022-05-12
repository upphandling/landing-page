const Logo = () => {
  return (
    <div className={`flex items-center logo`}>
      <svg width="211" height="60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter
            x="-21.1%"
            y="-86.8%"
            width="142.1%"
            height="273.6%"
            filterUnits="objectBoundingBox"
            id="a">
            <feOffset
              dx="2"
              dy="2"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              stdDeviation="4"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2519941 0"
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter
            x="-36.9%"
            y="-86.8%"
            width="173.9%"
            height="273.6%"
            filterUnits="objectBoundingBox"
            id="b">
            <feOffset
              dx="2"
              dy="2"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              stdDeviation="4"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.246940559 0"
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter
            x="-47.7%"
            y="-45.5%"
            width="195.4%"
            height="190.9%"
            filterUnits="objectBoundingBox"
            id="c">
            <feOffset
              dx="2"
              dy="2"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              stdDeviation="4"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.279993444 0"
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g fill="#FFF" fillRule="nonzero">
          <g filter="url(#a)" transform="translate(6 26.964)">
            <path d="M17.55 23.036h-5.798v-9.501h-5.97v9.5H0V0h5.783v8.619h5.97V0h5.798zM33.563 23.036l-.979-4.403H26.43l-.995 4.403h-6.31L25.607 0h7.662l6.558 23.036h-6.263Zm-2.035-9.293-.948-4.466c-.104-.493-.228-1.064-.373-1.714a81.906 81.906 0 0 1-.412-1.957c-.13-.656-.23-1.224-.303-1.706a49.128 49.128 0 0 1-.288 1.65c-.119.63-.246 1.269-.38 1.919-.135.65-.265 1.242-.39 1.777l-.963 4.497h4.057ZM49.46 0c2.639 0 4.618.636 5.938 1.907 1.32 1.27 1.98 3.077 1.98 5.42 0 1.092-.15 2.127-.449 3.104a7.045 7.045 0 0 1-1.406 2.576c-.638.74-1.47 1.323-2.497 1.749-1.027.425-2.262.638-3.708.638h-1.413v7.642h-5.828V0h7.383Zm-.33 4.837h-1.225v5.688h.864c.513 0 .979-.102 1.398-.307.419-.205.749-.536.99-.993.24-.457.36-1.058.36-1.804 0-.82-.196-1.455-.588-1.906-.393-.452-.993-.678-1.8-.678ZM67.46 0c2.64 0 4.619.636 5.938 1.907 1.32 1.27 1.98 3.077 1.98 5.42 0 1.092-.15 2.127-.448 3.104a7.045 7.045 0 0 1-1.406 2.576c-.639.74-1.471 1.323-2.498 1.749-1.026.425-2.262.638-3.707.638h-1.414v7.642h-5.828V0h7.383Zm-.33 4.837h-1.225v5.688h.864c.513 0 .98-.102 1.398-.307.42-.205.75-.536.99-.993.24-.457.361-1.058.361-1.804 0-.82-.196-1.455-.589-1.906-.392-.452-.992-.678-1.798-.678ZM85.414 8.461 88.788 0h6.166l-6.637 14.118v8.918h-5.852v-8.73L75.828 0h6.213z" />
          </g>
          <g filter="url(#b)" transform="translate(146.961 26.964)">
            <path d="M0 22.81V.452h5.658v17.632h7.198v4.726zM34.056 11.51c0 1.796-.194 3.406-.582 4.83-.388 1.423-.98 2.634-1.776 3.634a7.613 7.613 0 0 1-3.023 2.281c-1.22.52-2.656.78-4.31.78-1.622 0-3.043-.262-4.263-.788a7.833 7.833 0 0 1-3.039-2.28c-.806-.995-1.408-2.207-1.806-3.635-.398-1.429-.597-3.046-.597-4.852 0-2.409.354-4.47 1.064-6.184.71-1.714 1.786-3.026 3.23-3.934C20.398.454 22.207 0 24.38 0c2.204 0 4.02.454 5.45 1.362 1.428.908 2.49 2.22 3.184 3.934s1.04 3.786 1.04 6.214Zm-13.441 0c0 1.429.133 2.64.398 3.635.265.995.676 1.75 1.232 2.266.556.515 1.263.773 2.12.773.899 0 1.62-.253 2.167-.758.546-.505.944-1.255 1.194-2.25.25-.995.375-2.217.375-3.666 0-2.194-.291-3.867-.873-5.02-.582-1.153-1.53-1.73-2.847-1.73-.868 0-1.58.263-2.136.788-.556.526-.967 1.289-1.232 2.289-.265 1-.398 2.224-.398 3.673ZM54.129.452v14.065c0 1.788-.322 3.32-.965 4.595a6.581 6.581 0 0 1-2.862 2.918c-1.265.67-2.84 1.006-4.722 1.006-2.703 0-4.773-.714-6.21-2.141-1.438-1.428-2.157-3.508-2.157-6.24V.451h5.649v13.837c0 1.391.235 2.392.706 3.002.47.61 1.167.914 2.088.914.658 0 1.194-.132 1.61-.396.414-.264.72-.686.918-1.265.197-.58.296-1.341.296-2.286V.452h5.649Z" />
          </g>
          <g filter="url(#c)" transform="matrix(-1 0 0 1 143.071 6)">
            <path d="m3.058 24.655-3.05-5.332 3.804-5.788-.763-3.047L9.91 2.872 15.168 0c2.54 1.015 8.364 8.356 11.5 9.4 1.61.537 1.983 7.073 2.745 7.834.509.508.573 2.14 4.13 3.155 2.541 1.016 4.32 2.285 5.337 3.809 1.016 1.523-.376 4.889-2.41 8.443 1.548 1.742 2.594 3.179 3.137 4.309.67 1.394 1.444 3.744 2.322 7.05h-8.386l1.525-1.523-3.812-2.285-4.574-5.331-3.803-3.003-5.345.718-7.07 3.198-2.84 5.18V44H.761L0 40.192c2.5-3.98 4.179-7.396 5.236-9.51 1.058-2.113.869-5.29 2.352-9.27l-4.53 3.243Z" />
            <path d="m26.587 34.974 3.62 4.727-1.443 3.848h-5.77l2.163-1.54zM9.468 40.123l2.275-3.965 4.137-1.86.801 2.724-.801 3.876.801 3.102H10.27z" />
          </g>
        </g>
      </svg>
    </div>
  )
}

export {Logo}
