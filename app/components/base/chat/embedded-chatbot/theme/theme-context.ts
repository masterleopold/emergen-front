import { createContext, useContext } from 'use-context-selector'
import { hexToRGBA } from './utils'

export class Theme {
  public chatColorTheme: string | null
  public chatColorThemeInverted: boolean

  public primaryColor = '#681CEA'
  public backgroundHeaderColorStyle = 'backgroundImage: linear-gradient(to right, #681CEA, #9058F0)'
  public headerBorderBottomStyle = ''
  public colorFontOnHeaderStyle = 'color: white'
  public colorPathOnHeader = 'white'
  public backgroundButtonDefaultColorStyle = 'backgroundColor: #681CEA'
  public roundedBackgroundColorStyle = 'backgroundColor: rgb(252 253 254)'
  public chatBubbleColorStyle = 'backgroundColor: rgb(248 244 254)'
  public chatBubbleColor = 'rgb(248 244 254)'

  constructor(chatColorTheme: string | null = null, chatColorThemeInverted = false) {
    this.chatColorTheme = chatColorTheme
    this.chatColorThemeInverted = chatColorThemeInverted
    this.configCustomColor()
    this.configInvertedColor()
  }

  private configCustomColor() {
    if (this.chatColorTheme !== null && this.chatColorTheme !== '') {
      this.primaryColor = this.chatColorTheme ?? '#681CEA'
      this.backgroundHeaderColorStyle = `backgroundColor: ${this.primaryColor}`
      this.backgroundButtonDefaultColorStyle = `backgroundColor: ${this.primaryColor}`
      this.roundedBackgroundColorStyle = `backgroundColor: ${hexToRGBA(this.primaryColor, 0.05)}`
      this.chatBubbleColorStyle = `backgroundColor: ${hexToRGBA(this.primaryColor, 0.15)}`
      this.chatBubbleColor = `${hexToRGBA(this.primaryColor, 0.15)}`
    }
  }

  private configInvertedColor() {
    if (this.chatColorThemeInverted) {
      this.backgroundHeaderColorStyle = 'backgroundColor: #ffffff'
      this.colorFontOnHeaderStyle = `color: ${this.primaryColor}`
      this.headerBorderBottomStyle = 'borderBottom: 1px solid #ccc'
      this.colorPathOnHeader = this.primaryColor
    }
  }
}

export class ThemeBuilder {
  private _theme?: Theme
  private buildChecker = false

  public get theme() {
    if (this._theme === undefined)
      throw new Error('The theme should be built first and then accessed')
    else
      return this._theme
  }

  public buildTheme(chatColorTheme: string | null = null, chatColorThemeInverted = false) {
    if (!this.buildChecker) {
      this._theme = new Theme(chatColorTheme, chatColorThemeInverted)
      this.buildChecker = true
    }
    else {
      if (this.theme?.chatColorTheme !== chatColorTheme || this.theme?.chatColorThemeInverted !== chatColorThemeInverted) {
        this._theme = new Theme(chatColorTheme, chatColorThemeInverted)
        this.buildChecker = true
      }
    }
  }
}

const ThemeContext = createContext<ThemeBuilder>(new ThemeBuilder())
export const useThemeContext = () => useContext(ThemeContext)
