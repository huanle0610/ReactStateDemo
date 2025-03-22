import JXG from 'jsxgraph';
import { assign } from 'lodash';
import React, { Component } from 'react';

// Define the props interface
interface JXGBoardProps {
  style?: React.CSSProperties;
  className?: string;
  logic: ((board: JXG.Board) => void) | string;
  boardAttributes?: Partial<JXG.BoardAttributes>;
  jessieCode?: boolean;
}

export default class JXGBoard extends Component<JXGBoardProps> {
  private id: string;
  private defaultStyle: React.CSSProperties;
  private defaultBoardAttributes: Partial<JXG.BoardAttributes>;

  constructor(props: JXGBoardProps) {
    super(props);
    this.id = 'board_' + Math.random().toString(36).substring(2, 9);
    this.defaultStyle = { width: 500, height: 500 };
    this.defaultBoardAttributes = {
      keepAspectRatio: true,
      grid: true,
      showNavigation: true,
      showCopyright: false,
    };
  }

  componentDidMount() {
    // Initialize the JSXGraph board
    const attributes = assign(
      {},
      this.defaultBoardAttributes,
      this.props.boardAttributes || {}
    );
    const board = JXG.JSXGraph.initBoard(this.id, attributes);

    if (this.props.jessieCode) {
      board.jc.parse(this.props.logic as string);
    } else {
      (this.props.logic as (board: JXG.Board) => void)(board);
    }
  }

  render() {
    const style = assign(this.defaultStyle, this.props.style || {});

    return (
      <div
        id={this.id}
        className={`jxgbox ${this.props.className || ''}`}
        style={style}
      />
    );
  }
}
