package com.example.schoolservicebackend.Beans;

public class AddResponse {
    private Long id;
    private String msg;

    public void setId(Long id) {
        this.id = id;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Long getId() {
        return id;
    }

    public String getMsg() {
        return msg;
    }

}
