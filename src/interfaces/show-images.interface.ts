interface ShowImageResolution {
  url: string;
  width: number;
  height: number;
}

export interface ShowImage {
  id: number;
  type: "background" | "poster";
  main: boolean;
  resolutions: {
    original: ShowImageResolution;
    medium: ShowImageResolution;
  };
}

export interface ShowImages {
  images: Array<ShowImage>;
}
