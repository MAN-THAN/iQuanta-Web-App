'use client'
import { useState } from "react";
import { Modal, Space } from "antd";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
const ControlPost = ({ isOpen, onClose, setValue, value }) => {

    return (
        <>
            <Modal
                title={
                    <Space>
                        <span
                            style={{ cursor: 'pointer' }}
                            onClick={() => onClose(false)}
                        >
                            <ArrowLeft />
                        </span>
                        <span style={{ fontSize: "18px", fontWeight: "600" }} >Control who can mention you in post</span>
                    </Space>
                }
                centered
                open={isOpen}
                onOk={() => onClose(false)}
                onCancel={() => onClose(false)}
                closable={false}
                footer={null}
                width='400px'
            >
                <RadioGroup onChange={setValue} value={value} py='5'>
                    <Stack direction='column' >
                        <Radio value='Everyone'>Everyone</Radio>
                        <Radio value='Followers'>My Followers</Radio>
                        <Radio value='My Study Partners'>My Study Partners</Radio>
                    </Stack>
                </RadioGroup>
            </Modal>
        </>
    );
};


export default ControlPost