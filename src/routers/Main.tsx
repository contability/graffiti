import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main : Function = () => {
    const navigate : Function = useNavigate();

    const { 
        register, 
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const movePage : Function = (path : string) => {
        navigate(path);
    };

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
    }

    const Input = ({ label, register, required } : any) => (
        <>
            <label>{label}</label>
            <input {...register(label, {required})} />
        </>
    );

    const Select = React.forwardRef(({ onChange, onBlur, name, label } : any, ref : any) => (
        <>
            <label>{label}</label>
            <select name={name} ref={ref} onChange={onChange} onBlur={onBlur} >
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
        </>
    ));

    return (
        <MainBox>
            <ul>
                <li>
                    <button onClick={() => movePage("/")}>Go To Main</button>
                </li>
            </ul>
            
            {/* ex1 */}
            <form onSubmit={handleSubmit(onSubmit)}>    {/* handleSubmit은 onSubmit을 호출하기 전에 입력을 확인한다 */}
                <input defaultValue={'test'} {...register('example')} />    {/* register 기능을 호출하여 입력 */}
                <input {...register('exampleRequired', {required: true})} />    {/* 필수 또는 기타 표준 HTML 유효성 검사 규칙에 유효성 검사 포함 */}
                {errors.exampleRequired && <span>This field is required</span>} {/* 필드 유효성 검사가 필해마녀 오류가 반환 */}
                <input type="submit" />
            </form>

            {/* ex2 */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <input type="number" {...register("age", { min: 18, max: 99 })} />
                <input type="submit" />
            </form>

            {/* ex3 */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="First Name" register={register} required/>
                <Select label="Age" {...register("Age")}/>
                <input type="submit" />
            </form>
        </MainBox>
    );
};

const MainBox = styled.div`
    width: 100%;
    height: 100%;
`;

export default Main;