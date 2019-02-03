/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface GlBackgroundVideo {
    'muted': boolean;
    'poster': string;
    'src': string;
  }
  interface GlBackgroundVideoAttributes extends StencilHTMLAttributes {
    'muted'?: boolean;
    'poster'?: string;
    'src'?: string;
  }

  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'GlBackgroundVideo': Components.GlBackgroundVideo;
    'MyComponent': Components.MyComponent;
  }

  interface StencilIntrinsicElements {
    'gl-background-video': Components.GlBackgroundVideoAttributes;
    'my-component': Components.MyComponentAttributes;
  }


  interface HTMLGlBackgroundVideoElement extends Components.GlBackgroundVideo, HTMLStencilElement {}
  var HTMLGlBackgroundVideoElement: {
    prototype: HTMLGlBackgroundVideoElement;
    new (): HTMLGlBackgroundVideoElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLElementTagNameMap {
    'gl-background-video': HTMLGlBackgroundVideoElement
    'my-component': HTMLMyComponentElement
  }

  interface ElementTagNameMap {
    'gl-background-video': HTMLGlBackgroundVideoElement;
    'my-component': HTMLMyComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}