import { css } from '@emotion/css';

export const style = {
  message: css`
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;

    .message-content {
      height: 48px;
      display: inline-flex;
      align-items: center;
      background: var(--md-sys-color-inverse-surface);
      box-shadow: var(--md-sys-elevation-3);
      border-radius: 4px;
      padding: 0 16px;
      color: var(--md-sys-color-inverse-on-surface);

      .icon {
        color: var(--md-sys-color-inverse-primary);
        margin-right: 10px;
        font-size: 24px;
      }
    }
  `,
  container: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1050;

    &,
    .message {
      pointer-events: none;
    }
  `,
  ss: css`
    .icon.loading {
      animation: load 1.1s infinite linear;
      color: var(--color-primary-4);
    }

    .icon.success {
      color: var(--color-success-4);
    }

    .icon.info {
      color: rgb(var(--primary-6));
    }

    .icon.error {
      color: var(--color-danger-4);
    }

    .icon.warning {
      color: var(--color-warning-4);
    }

    @-webkit-keyframes load {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `,
};
