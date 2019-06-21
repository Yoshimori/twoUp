
import styled from '@emotion/styled'

export const ColumnWrapper = styled.div`
    display: flex;
    height: 50px;
    border: 1px solid #000;

    >div {
        display: flex;
        align-items: center;
        padding-left: 10px;
    }

    &:nth-child(2n+2) {
        background-color: #c5c8cc;
    }
`
export const Column__1 = styled.div`
    width: 35%;
    border-right: 1px solid #000;
`
export const Column__2 = styled.div`
    width: 25%;
    border-right: 1px solid #000;
`
export const Column__3 = styled.div`
    width: 25%;
    border-right: 1px solid #000;
`
export const Column__4 = styled.div`
    width: 15%;
`

// export default ColumnWrapper