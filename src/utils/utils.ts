import { FC } from "react";
export class MenuClass {
  constructor(
    public name: string,
    public Component: FC<{ activeColor: string | undefined }>
  ) {}
}

export class FilterClass {
  constructor(
    public name: string,
    public icon?: string,
    public showCaret?: boolean,
    public showTag?: boolean,
    public heading?: boolean
  ) {}
}

export class DropdownOption {
  constructor(public label: string, public badge: string) {}
}

export class EachListClass {
  constructor(
    public name: string,
    public state: string,
    public education: string,
    public hashTags: string[],
    public tags: string[],
    public displayRightTags: boolean = false
  ) {}
}
