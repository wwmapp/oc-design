import React, { PropsWithChildren, ReactNode } from 'react';
import { findDOMNode } from 'react-dom';
import { Button, Message, Tooltip } from '@oc/design';
import { IconCode, IconCopy } from '@oc/icon';
import ClipboardJS from 'clipboard';
import Css from './css';

interface CellCodeProps {
  tsx?: ReactNode;
  cssCode?: string;
}

interface CellCodeState {
  showAll: boolean;
  codeType: 'jsx' | 'tsx';
}

const CODE_JSX = 'jsx';
const CODE_TSX = 'tsx';

const locales = {
  'zh-CN': {
    copy: '复制',
    copied: '复制成功',
    expand: '展开代码',
    collapse: '收起代码',
  },
};

class CellCode extends React.Component<PropsWithChildren<CellCodeProps>, CellCodeState> {
  private btnCopy = null;

  private codeEle = null;

  constructor(
    props: React.PropsWithChildren<CellCodeProps> | Readonly<React.PropsWithChildren<CellCodeProps>>
  ) {
    super(props);
    this.state = {
      showAll: false,
      codeType: props.tsx ? CODE_TSX : CODE_JSX,
    };
  }

  componentDidMount(): void {
    const t = locales['zh-CN'];
    if (this.btnCopy) {
      const clipboard = new ClipboardJS(this.btnCopy, {
        text: () =>
          ((this.codeEle as never as HTMLElement).querySelector('.language-js') as HTMLElement)
            .innerText,
      });
      clipboard.on('success', (e) => {
        e.clearSelection();
        Message.success(t.copied);
      });
    }
  }

  toggleCode = (e: any) => {
    // 修正点击展开按钮时，页面向上滚动而不是向下滚动的问题
    if (!this.state.showAll) {
      e.target.blur();
    }
    this.setState({
      showAll: !this.state.showAll,
    });
  };

  renderOperations = () => {
    const { showAll } = this.state;
    const t = locales['zh-CN'];

    return (
      <div className="arco-code-operations">
        <Tooltip content={showAll ? t.collapse : t.expand}>
          <span>
            <Button
              aria-describedby="code"
              onClick={this.toggleCode}
              aria-label={t.collapse}
              variant="outlined"
            >
              <IconCode />
            </Button>
          </span>
        </Tooltip>
        <Tooltip content={t.copy}>
          <span>
            <Button ref={(ref: any) => (this.btnCopy = ref)} variant="outlined" aria-label={t.copy}>
              <IconCopy />
            </Button>
          </span>
        </Tooltip>
      </div>
    );
  };

  render() {
    const { props } = this;
    const { showAll, codeType } = this.state;
    return (
      <div className="arco-code-wrapper">
        {this.renderOperations()}
        <div className={`content-code-design ${showAll ? 'show-all' : ''}`}>
          <div className="code" ref={(ref: any) => (this.codeEle = ref)}>
            {codeType === CODE_TSX ? props.tsx : props.children}
          </div>
        </div>
      </div>
    );
  }
}

type CellCodeType = typeof CellCode & { Css: any };

(CellCode as CellCodeType).Css = Css;

export default CellCode as CellCodeType;
