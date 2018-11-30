# REDUX

## ACTIONS

- ACTIVITIES_RECEIVED is dispatched when we receive the api response

```javascript
    {
        type: ACTIVITIES_RECEIVED,
        activities: [...]
    }
```

- FETCH_ACTIVITIES is dispatched when we call api

## REDUCERS

- activitiesReducer

```javascript
    const initialState: []
```

When ACTIVITIES_RECEIVED is dispatched state becomes action.activities

- loadingReducer

```javascript
    const initialState: false
```

When ACTIVITIES_RECEIVED is dispatched state become false

When FETCH_ACTIVITIES is dispatched state become true
