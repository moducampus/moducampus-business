# 모두의 캠퍼스 Contact form

## Default Setting

1. Serverless Framework를 `yarn global add serverless`로 설치해주세요.
2. package.json에 다음을 추가해주세요.

```json
// package.json
{   ...
    "scripts": {
        "start": "cross-env NODE_ENV=development NODE_PATH=src sls offline --stage=local",
        "deploy": "cross-env NODE_ENV=production NODE_PATH=src deploy"
    }
}
```

start 명령은 로컬 환경에서 테스트 할 때 사용되며, deploy 명령은 실서버 운영시 사용되는 명령어 입니다.

3. `config` 폴더를 생성하고 그 안에 `env.yml`과 `handler.yml`을 추가해주세요.

   - env.yml
     사용할 aws 계정을 Profile에 작성해주세요.
     `Profile:`
   - handler.yml
     lambda 함수에서 사용할 함수를 다음과 같은 형식으로 추가해주세요.
     ```yml
     handler:
     events:
       - http:
           path:
           method:
     ```

4. serverless.yml에 다음을 추가해주세요.

```yml
# serverless.yml
...
provider:
    ...
    profile: ${file(./config/env.yml):Profile}
    ...

functions: ${file(./config/handler.yml)}
```
