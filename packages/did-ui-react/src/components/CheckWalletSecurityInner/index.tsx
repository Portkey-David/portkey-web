import { ChainId } from '@portkey/types';
import PortkeyStyleProvider from '../PortkeyStyleProvider';
import { useState } from 'react';
import SecurityCheckMain from '../SecurityCheck/index.component';
import GuardianMain from '../Guardian/index.component';
import './index.less';
import clsx from 'clsx';

const preFixCls = 'portkey-ui-check-wallet-security';

export interface BaseCheckWalletSecurityInnerProps {
  caHash: string;
  originChainId: ChainId;
  targetChainId: ChainId;
}

export interface ICheckWalletSecurityParams {
  syncRes: boolean;
}

export interface CheckWalletSecurityInnerProps extends BaseCheckWalletSecurityInnerProps {
  onCancel?: () => void;
  onError?: (error: Error) => void;
  onFinish?: (params: ICheckWalletSecurityParams) => void;
}

enum Step {
  confirmModal = 'confirmModal',
  addGuardian = 'addGuardian',
}

export default function CheckWalletSecurityInner({
  caHash,
  originChainId,
  targetChainId,
  onCancel,
  onFinish,
}: CheckWalletSecurityInnerProps) {
  const [step, setStep] = useState<Step>(Step.confirmModal);

  return (
    <PortkeyStyleProvider>
      <div className={clsx(`${preFixCls}-content`, step === Step.addGuardian && `${preFixCls}-add-guardian`)}>
        {!step ||
          (step === Step.confirmModal && (
            <SecurityCheckMain
              onCancel={onCancel}
              onConfirm={() => {
                setStep(Step.addGuardian);
              }}
            />
          ))}

        {step === Step.addGuardian && (
          <GuardianMain
            caHash={caHash || ''}
            originChainId={originChainId}
            accelerateChainId={targetChainId}
            onAddGuardianFinish={onFinish}
            onBack={() => setStep(Step.confirmModal)}
          />
        )}
      </div>
    </PortkeyStyleProvider>
  );
}
