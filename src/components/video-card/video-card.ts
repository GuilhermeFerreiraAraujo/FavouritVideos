import { bindable } from "aurelia-framework";
import { Song } from "models/shared.models";

export class VideoCard{
  
  @bindable
  public link: string;

  @bindable
  public song: Song;

}
