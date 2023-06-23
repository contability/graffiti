import { ChangeEventHandler, FocusEventHandler, ForwardedRef, forwardRef, ReactNode, useId } from "react";

export interface ICheckboxProps{
    /** Radio의 레이블 */
    label? : string | ReactNode;
    /** label 위치 */
    labelPlacement?: 'top' | 'left' | 'right';
    /** 기본 값 */
    value: string;
    /** 비활성화 여부 */
    disabled?: boolean;
    /**
     * default로 비활성화
     * 
     * true인 경우 disabled 처럼 동작
     * ToggleGroup에 사용할 때 selectAll 기능 이용 시 disabled 되기 위한 property
     */
    setDisabled?: boolean;
    /** 필수 여부 */
    required?: boolean;
    /** input의 name 하고 react-hook-form에 등록할 name */
    name?: string;
    /** lost focus 이벤트 */
    onBlur?: FocusEventHandler<HTMLInputElement>;
    /** change 이벤트 */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /** checked 여부*/
    checked?: boolean;
    /** input 요소의 id*/
    id?: string;
    /** input 요소의 defaultChecked */
    defaultChecked?: boolean;
    /** ToggleGroup에서 사용 시 Group에 있는 모든 Toggle 선택할지 여부 */
    selectAll?: boolean;
    /** 체크박스의 형태: large or small */
    variant?: 'large' | 'small';
    /** 체크 대신 대시 (-) 노출하기 */
    isIndeterminate?: boolean;
    /** checkboxGroup에서 검색될지 여부 */
    groupItem?: boolean;
    /** readonly 여부 */
    readOnly?: boolean;
    /** className for extend */
    className?: string;
}

const CheckboxRoot = ({
    label,
    value,
    name,
    labelPlacement = 'right',
    onBlur,
    onChange,
    checked,
    defaultChecked,
    id,
    disabled = false,
    required = false,
    setDisabled,
    // register,
    // registerOptions,
    selectAll,
    variant = 'large',
    isIndeterminate = false,
    groupItem = false,
    // labelProps,
    className,
    ...props
  }: ICheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {
    const labelIsString = !!(label && typeof label === 'string');
    return <label htmlFor={id} data-label-placement={labelPlacement} data-disabled={disabled || setDisabled} data-group-item={groupItem}>
        {label && labelIsString ? label : <input/>}
    </label>
};

export const Checkbox = forwardRef(CheckboxRoot);
Checkbox.displayName = 'Checkbox';

export default CheckboxRoot;